import React from 'react';
import { useForm } from 'react-hook-form';
import { Paper } from '../../components/UIComponents/Paper';
import { useLoginMutation } from '../../redux/services/authApi';
import styles from './Login.module.scss';

type FormProps = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm<FormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const [login, { error }] = useLoginMutation();

  const onSubmit = (data: FormProps) => {
    console.log(data);
    login(data);
  };

  console.log(error);

  return (
    <div className={styles.root}>
      <Paper>
        <div>
          <h1 className={styles.title}>Login</h1>
          <span className={styles.subtitle}>Пожалуйста, введите Email и Пароль</span>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input {...register('email', { required: 'Вы не ввели Email' })} />
                <span className={styles.errorMessage}>{errors.email?.message}</span>
              </div>
              <div>
                <input {...register('password', { required: 'Вы не ввели пароль' })} />
                <span className={styles.errorMessage}>{errors.password?.message}</span>
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
          <div>
            Ещё нет аккаунта?
            <p>Sign Up</p>
          </div>
        </div>
      </Paper>
    </div>
  );
};
