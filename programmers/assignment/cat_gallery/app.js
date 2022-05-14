const app = document.querySelector('.App');
const breadcrumb = document.querySelector('.Breadcrumb');
const nodes = document.querySelector('.Nodes');

const DIRECTORY = 'DIRECTORY';
const FILE = 'FILE';
const ROOT = 'root';
const LOADING = 'Loading';
const IMAGE_VIEWER = 'ImageViewer';

let path = [{ name: ROOT, id: ROOT }];

initGallery(ROOT);

async function initGallery(id) {
  printModal(LOADING);
  let gallery = JSON.parse(localStorage.getItem(id));
  if (!gallery) {
    gallery = await getDirectory(id);
    localStorage.setItem(id, JSON.stringify(gallery));
  }
  const directories = gallery.filter((node) => node.type === DIRECTORY);
  const files = gallery.filter((node) => node.type === FILE);

  clearChildNodes(breadcrumb);
  setBreadcrumb();

  clearChildNodes(nodes);
  if (id !== ROOT) createPrevNode();
  directories.forEach((directory) => createNode(directory));
  files.forEach((file) => createNode(file));
  removeModal(LOADING);
}

function printModal(type, filePath) {
  const modal = document.createElement('div');
  modal.classList.add('Modal');

  const content = document.createElement('div');
  content.className = 'content';

  const img = document.createElement('img');
  let imgSrc;
  if (type === LOADING) {
    modal.classList.add(LOADING);
    imgSrc = './assets/nyan-cat.gif';
  } else if (type === IMAGE_VIEWER) {
    modal.classList.add(IMAGE_VIEWER);
    imgSrc = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${filePath}`;
  }
  img.setAttribute('src', imgSrc);

  content.append(img);
  modal.append(content);
  app.append(modal);
}

function removeModal(type) {
  const modal = document.querySelector(`.${type}`);
  modal.remove();
}

function setBreadcrumb() {
  path.forEach((directory, idx) => {
    const { name, id } = directory;
    const directoryName = document.createElement('div');
    directoryName.innerText = name;
    breadcrumb.append(directoryName);

    if (path.length > 1) {
      directoryName.addEventListener('click', () => {
        path = path.slice(0, idx + 1);
        initGallery(id);
      });
    }
  });
}

function clearChildNodes(parentNode) {
  while (parentNode.hasChildNodes()) {
    parentNode.firstChild.remove();
  }
}

function createPrevNode() {
  const node = document.createElement('div');
  node.className = 'Node';

  const img = document.createElement('img');
  const imgSrc = './assets/prev.png';
  img.setAttribute('src', imgSrc);
  node.append(img);

  nodes.append(node);
  const prevId = path[path.length - 2].id;
  node.addEventListener('click', () => {
    path.pop();
    initGallery(prevId);
  });
}

function createNode(data) {
  const { name, id, type, filePath } = data;
  const node = document.createElement('div');
  node.className = 'Node';

  const img = document.createElement('img');
  const imgSrc =
    type === DIRECTORY ? './assets/directory.png' : './assets/file.png';
  img.setAttribute('src', imgSrc);
  node.append(img);

  const title = document.createElement('div');
  title.innerText = name;
  node.append(title);

  nodes.append(node);

  if (type === DIRECTORY) {
    node.addEventListener('click', () => {
      path.push({ name, id });
      initGallery(id);
    });
  } else if (type === FILE) {
    node.addEventListener('click', () => {
      printModal(IMAGE_VIEWER, filePath);
      const imageViewer = document.querySelector('.ImageViewer');
      const content = imageViewer.querySelector('.content');
      const img = content.querySelector('img');
      imageViewer.addEventListener('click', (event) => {
        if (event.target !== content && event.target !== img) {
          removeModal(IMAGE_VIEWER);
        }
      });
      window.addEventListener('keydown', handleKeydown);
    });
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    removeModal(IMAGE_VIEWER);
    window.removeEventListener('keydown', handleKeydown);
  }
}
