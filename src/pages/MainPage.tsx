import { useState } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { checkDomain } from "../api/domain";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    const [domain, setDomain] = useState<string>("");
    const [available, setAvailable] = useState<boolean | null>(null);

    const checkDomainHandler = async () => {
        const status = await checkDomain(domain);

        if (status && status == "available") {
            setAvailable(true);
        } else {
            setAvailable(true);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div>
                <div>
                    <h1>Cek Domain Kamu</h1>
                </div>
                <InputText
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    placeholder="YourDomain.com "
                />
                <Button onClick={checkDomainHandler} label="Cek Domain" />
                {available !== null && (
                    <div>
                        {available ? (
                            <div>
                                <p>Domain Belum Dipakai</p>
                                <Button
                                    onClick={() =>
                                        navigate(`/checkout/${domain}`)
                                    }
                                    label={"Checkout"}
                                />
                            </div>
                        ) : (
                            <p>Domain Sudah Dipakai</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
