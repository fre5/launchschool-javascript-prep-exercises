function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/* It logs

>Product1
>Product2
>Product3
>Product not found

in the console, because they are missing break therefore everything below the called case gets logged in the console.

*/