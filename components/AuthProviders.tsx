"use client"

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Button from './Button';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>()

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      console.log('res', res)
      console.log(process.env.NEXT_PUBLIC_GRAFBASE_API_KEY,)

      setProviders(res)
    }

    fetchProviders()
  }, [])

  if(providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <Button key={i} handleClick={() => signIn(provider?.id)} title='Sign in' />
        ))}
      </div>
    )
  }
}

export default AuthProviders