const Book = ({ img, title, author }) => {
  //? const { img, title, author } = props -> this is the same as putting img,title,author in () above

  //* attribte, eventHandler
  //* onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello World!')
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title + ' Inline Example')}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        {' '}
        reference example{' '}
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

export default Book
