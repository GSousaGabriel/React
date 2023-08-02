import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component test', () => {
    test('renders posts if success', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{
                    id: 1, title: "test"
                }]
            }
        })
        render(<Async />)

        const postsGenerated = await screen.findAllByRole('listitem')
        expect(postsGenerated).not.toHaveLength(0)
    })
})