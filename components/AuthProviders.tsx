"use client"

import { getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

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

      setProviders(res)
    }

    fetchProviders()
  }, [])

  if(providers) {
    return (
      <div>
        {Object.values(providers).map((providers: Provider, i) => (
          <button key={i}>{providers.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders