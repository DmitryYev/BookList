import {generate as id} from 'shortid'

export const categories = [
  {_id: '1', title: 'Fantastic'},
  {_id: '2', title: 'Programming'},
]

export const defaultBooks = [
  {
    _id: id(),
    title: `Harry Potter and the Philosopher's Stone`,
    desc:
      `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.`,
    categoryId: 1,
  },
  {
    _id: id(),
    title: 'Learning React: Functional Web Development with React and Redux',
    desc:
      'This book is a standard for introducing you to React components used by Facebook and other large-scale distributors of commercial content. Those popular webpages that you visit are powered by React components.',
    categoryId: 2,
  },
  {
    _id: id(),
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    desc:
      'Eloquent JavaScript lets the reader digest all its knowledge easily thanks to an easy to understand and relatable language. Though not essentially a JavaScript book, it offers an introduction to programming using JavaScript.',

    categoryId: 2,
  }
]
