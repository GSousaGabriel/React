import { Await, defer, useLoaderData } from 'react-router-dom'

import EventsList from '../components/EventsList'
import { Suspense } from 'react'

function EventsPage() {
    const { events } = useLoaderData()

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    )
}

const loadEvents = async () => {
    const response = await fetch('http://localhost:8080/events')

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch data!' }
        throw new Response(JSON.stringify({ message: 'Could not fetch data!' }), {
            status: 500
        })
    } else {
        const resData= await response.json()
        return resData.events
    }
}

const fetchEvents = () => {
    return defer({
        events: loadEvents()
    })
}

export default EventsPage
export { fetchEvents }