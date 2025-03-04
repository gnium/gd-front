import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HttpClient, httpClient } from "../../httpClient";
import { urls } from "../../config";

const AuthRegisterDemoPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [clickCode, setClickCode] = useState<string | null>(null);
    const referrerCode = searchParams.get("ref");
    const actionName = "register";
    const client: HttpClient = httpClient;
    client.setBaseURL(urls.apiBase);
    useEffect(() => {
        if (referrerCode) {
            client.post("/referral-clicks", {
                referrer_code: referrerCode,
                action_name: actionName
            })
                .then(response => setClickCode(response.click_code))
                .catch(error => console.error("Error recording click:", error));
        }
    }, [referrerCode]);

    const handleComplete = () => {
        if (clickCode) {
            client.post("/referral-clicks/complete", {
                code: clickCode
            })
                .then(() => alert("Action completed successfully!"))
                .catch(error => console.error("Error completing action:", error));
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Register Demo Page</h1>
            <p>Referrer Code: {referrerCode}</p>
            <button onClick={handleComplete} disabled={!clickCode}>
                Complete Registration
            </button>
        </div>
    );
};

export default AuthRegisterDemoPage;
