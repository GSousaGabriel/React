import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenE } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(() => {
    if (!token) {
      return
    }

    if(token === 'EXPIRED'){
      submit(null, { action: '/logout', method: 'POST' })
    }

    const tokenE= getTokenE()

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' })
    }, tokenE);
  }, [token, submit])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
