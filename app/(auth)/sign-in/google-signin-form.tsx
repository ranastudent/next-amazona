'use client'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.action'

export function GoogleSignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  return (
    <form action={() => SignInWithGoogle(callbackUrl)}>
      <Button className="w-full" variant="outline">
        Sign In with Google
      </Button>
    </form>
  )
}
