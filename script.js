const fileInput = document.getElementById('file-input');
const uploadSection = document.getElementById('upload-section');
const processingSection = document.getElementById('processing-section');
const resultSection = document.getElementById('result-section');
const dropArea = document.getElementById('drop-area');

fileInput.addEventListener('change', handleFile);
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = 'rgba(60,222,76,0.2)';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.style.backgroundColor = '';
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = '';
  fileInput.files = e.dataTransfer.files;
  handleFile();
});

function handleFile() {
  if (fileInput.files.length > 0) {
    uploadSection.classList.add('hidden');
    processingSection.classList.remove('hidden');

    setTimeout(() => {
      processingSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
    }, 30000); // 60 segundos
  }
}
