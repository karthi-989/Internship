var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];
  
  function displayReadingStatus(books) {
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var status = book.readingStatus ? 'already read.' : 'not read yet.';
      console.log(`${book.title} by ${book.author} is ${status}`);
    }
  }
  
  displayReadingStatus(library);
  