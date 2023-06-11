import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';
import ValidationErrors from '~/components/util/ValidationErrors';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData();
  const authMode = searchParams.get('mode') || 'login';

  const submitBtnCaption = authMode === 'login' ? 'Login' : 'Create User';
  const toggleBtnCaption =
    authMode === 'login' ? 'Create a new user' : 'Log in with existing user';

  const isSubmitting = navigation.state !== 'idle';

  return (
    <>
      <Form method="post" className="form" id="auth-form">
        <div className="icon-img">
          {authMode === 'login' ? <FaLock /> : <FaUserPlus />}
        </div>
        <p>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" minLength={7} />
        </p>
        <ValidationErrors validationErrors={validationErrors} />
        <div className="form-actions">
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Authenticating...' : submitBtnCaption}
          </button>
          <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>
            {toggleBtnCaption}
          </Link>
        </div>
      </Form>
      <Form action="/auth/google" method="post" className="form">
        <div className="form-actions">
          <button>Login with Google</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
