import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Greeting from "./Greeting"

describe('Greeting component', () => {

    test('check welcome', () => {
        render(<Greeting />)

        const helloElement = screen.getByText('Hello world!', { exact: true })
        expect(helloElement).toBeInTheDocument()
    })

    test('check button not clicked', () => {
        render(<Greeting />)

        const notClickedElement = screen.getByText('This is a hello to you', { exact: false })
        expect(notClickedElement).toBeInTheDocument()
    })

    test('check button clicked', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const ClickedElement = screen.getByText('Showing text.', { exact: true })
        expect(ClickedElement).toBeInTheDocument()

        const notClickedElement = screen.queryByText('This is a hello to you', { exact: false })
        expect(notClickedElement).toBeNull()
    })
})