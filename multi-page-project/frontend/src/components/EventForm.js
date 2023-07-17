import { Form, useNavigate, useNavigation, useActionData, redirect, json } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const data = useActionData()
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting"

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {Object.values(data.errors).map(err => (
          <li key={err}>{err}</li>
        ))}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'submitting' : 'Save'}</button>
      </div>
    </Form>
  );
}

const newEventAction = async ({ request, params }) => {
  const data = await request.formData()
  const method = request.method

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
  }

  let url = 'http://localhost:8080/events/'

  if (method === "PATCH") {
    url = 'http://localhost:8080/events/' + params.eventId
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(eventData),
    headers: {
      'Content-type': 'application/json'
    }
  })

  if (response.status === 422) {
    return response
  } else if (!response.ok) {
    // return { isError: true, message: 'Could not fetch data!' }
    throw json({ message: 'Could not save event!' }, { status: 500 })
  } else {
    return redirect('/events')
  }
}

export default EventForm;
export { newEventAction }
