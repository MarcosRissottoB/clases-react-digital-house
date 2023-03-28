import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home page', () => {
  test('Title render', () => {
    render(<Home />)
    // const title = screen.getByText("Listado de hoteles")
    // expect(title).toBeInTheDocument()
    let title = screen.getByText('Listado de hoteles');
    // expect(title).toBeInTheDocument()
  })
})
