import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { styles } from "./AuthLayout.styles";
import { app } from "../../config";
import logo from '../../assets/logos/logo-horizontal.svg'
import background from '../../assets/backgrounds/background.png'
import PageHeader from "../../components/PageHeader/PageHeader";
const AuthLayout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.layout}>
            <div style={styles.content}>
                <div style={styles.headerWrapper}>
                    <PageHeader
                        backgroundImage={background}
                        height={100}
                        containerStyle={{
                            borderRadius: 20
                        }}
                        renderContent={() => {
                            return <div>
                                <img
                                    src={logo}
                                    alt={app.name}
                                    style={{
                                        width: '100%',
                                        maxWidth: 300,
                                        display: 'block',
                                        margin: 0,
                                        padding: 0,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        navigate('/')
                                    }}
                                />
                            </div>
                        }}
                    />
                </div>

                <main style={styles.main}>
                    <div style={styles.form}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;
