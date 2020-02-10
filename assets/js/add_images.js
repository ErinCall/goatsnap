'use strict';

const $dropzone = $('#image-dropzone');
const $imageInput = $('#image-contents');

const generatePreviewThumbnails = changeEvent => {
  changeEvent.preventDefault();
  const $previews = $("#image-previews");
  const $files = $(changeEvent.target.files);

  $files.each((_, file) => {
    if (! file.type.match(/image.*/)) {
      return;
    }

    const reader = new FileReader();
    reader.onload = readEvent => {
      const $thumbContainer = $('<div>', {
        class: "preview",
      });

      $thumbContainer.append($(`<span>${ file.name }</span>`));
      const $img = $('<img>', {
        src: readEvent.target.result,
        file: file
      });

      $thumbContainer.append($img);
      $previews.append($thumbContainer);
    };
    reader.readAsDataURL(file);
  });
};

$imageInput.on("change", generatePreviewThumbnails);

const receiveDroppedFiles = e => {
  // e.originalEvent <-- actual DOM event
  e.preventDefault();
  $imageInput.prop('files', e.originalEvent.dataTransfer.files);
  $imageInput.trigger("change");
};

$dropzone.on('dragover dragenter', e => {
  e.preventDefault();
  $dropzone.addClass('ready');
});

$dropzone.on('dragleave dragend drop', e => {
  e.preventDefault();
  $dropzone.removeClass('ready');
});

$dropzone.on('drop', receiveDroppedFiles);

// after reloading the page, there may be data in the form's inputs that's retained from before
// the reload. Trigger the change event so the existing data get reprocessed.
$imageInput.trigger("change");
