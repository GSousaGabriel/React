// Challenge / Exercise

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import RootLayoutEvents from "./pages/RootEvents";
import HomePage from "./pages/HomePage";
import EventsPage, { fetchEvents as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { fetchItem as fetchDetailLoader, actionItem as deleteEvent } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import { newEventAction as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
        {
          path: 'events',
          element: <RootLayoutEvents />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <EventsPage />, loader: eventsLoader },
            {
              path: ':eventId', id: 'eventDetail', loader: fetchDetailLoader, children: [
                { index: true, action: deleteEvent, element: <EventDetailPage /> },
                { path: 'edit', action: manipulateEventAction, element: <EditEventPage /> }
              ]
            },
            { path: 'new', action: manipulateEventAction, element: <NewEventPage /> },
          ]
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider router={router} />
}

export default App;