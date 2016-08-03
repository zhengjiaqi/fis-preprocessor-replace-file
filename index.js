module.exports = function(content, file, settings) {
  if (typeof settings == 'object' && settings instanceof Array) {
    settings.forEach(function(config, index) {
      handleReplace(file, config.targetFile, config.replaceFile);
    });
  } else if (typeof settings == 'object') {
    handleReplace(file, settings.targetFile, settings.replaceFile);
  }

  return content;

  function handleReplace(file, targetFile, replaceFile) {
    var fileId = file.getId();
    var doAddFile = false;
    if (typeof targetFile == 'string') {
      var regexp = new RegExp('^' + targetFile + '$');
      regexp.test(fileId) && (doAddFile = true)
    } else if (targetFile instanceof Array) {
      targetFile.forEach(function(src, index) {
        var regexp = new RegExp('^' + src + '$');
        regexp.test(fileId) && (doAddFile = true)
      })
    }
    if (doAddFile) {
      var wrapFile = fis.file.wrap(replaceFile);
      content = wrapFile.getContent();
    }
  }
};
