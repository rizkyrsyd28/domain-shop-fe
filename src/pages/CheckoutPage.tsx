import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { profile } from "../api/server";
import SelectDropdown, { Option } from "../components/SelectDropdown";
import { Profile } from "../entity/Response";
import InputText from "../components/InputText";
import Button from "../components/Button";

const optionTerm: Option[] = [
    {
        label: "1 Tahun",
        value: "100000",
    },
    {
        label: "2 Tahun",
        value: "200000",
    },
];

const CheckoutPage = () => {
    const { domain } = useParams<{ domain: string }>();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [term, setTerm] = useState<string>("");
    const [prof, setProfile] = useState<Profile | null>(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const result = await profile();
            if (result?.data != null) {
                setIsLogin(true);
                setProfile(result.data);
            } else {
                setIsLogin(false);
                setProfile(null);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="flex flex-col ">
            <div className="flex flex-row gap-x-5">
                <p>{domain}</p>
                <SelectDropdown
                    options={optionTerm}
                    value={term}
                    onChange={(val) => setTerm(val)}
                ></SelectDropdown>
            </div>
            <div className="">
                {isLogin ? (
                    <div>
                        <p>Nama: {prof?.name}</p>
                        <p>Email: {prof?.email}</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-row">
                            <p>Nama: </p>
                            <InputText
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Nama"
                            />
                        </div>
                        <div className="flex flex-row">
                            <p>Email: </p>
                            <InputText
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-row">
                            <p>Password: </p>
                            <InputText
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <Link to={"/login"}>Login Manual</Link>
            </div>
            <Button
                onClick={() => navigate(`/invoice/${domain}`)}
                label="checkout"
            />
        </div>
    );
};

export default CheckoutPage;
