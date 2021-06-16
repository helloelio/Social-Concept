import './LoginForm.scss';

const LoginForm = () => {
    return (
        <main className="main">
            <div className="main__content-withoutbg">
                <div className="form__block">
                    <h1>Login Form</h1>
                    <form id="form" action="/profile">
                        <label for="login">
                            Login <input type="login" required />
                        </label>
                        <label for="password">
                            Password <input type="password" required />
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </main>
    );
};

export default LoginForm;
