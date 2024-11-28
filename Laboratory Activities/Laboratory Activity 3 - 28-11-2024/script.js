document.getElementById('textInput').addEventListener('input', function() {
  const text = this.value.trim();

  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  document.getElementById('wordcount').textContent = `Words: ${wordCount}`;

  const sentenceCount = text.split(/[.!?]\s+/).filter(sentence => sentence.length > 0).length;
  document.getElementById('sentenceCount').textContent = `Sentences: ${sentenceCount}`;
});

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const button = document.getElementById('toggleMode');
  if (document.body.classList.contains('dark-mode')) {
    button.textContent = 'Switch to Light Mode';
  } else {
    button.textContent = 'Switch to Dark Mode';
  }
});
