import ReactDom from 'react-dom'

//* CSS
import './index.css'

//* setup vars
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81vpsIs58WL._AC_UL200_SR200,200_.jpg',
    title: 'Love You Forever',
    author: 'Robert Munsch',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL200_SR200,200_.jpg',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr. , Eric Carle',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
    title: 'Untamed',
    author: 'Glennon Doyle',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg',
    title: '1984',
    author: 'George Orwell',
  },
]

//* functions
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book
        return <Book book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { img, title, author } = props.book // -> this is the same as putting props in () above
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
