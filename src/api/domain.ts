import { DomainResponse } from "../entity/Domain";
import { DomainChcekAPI } from "./api";

export const checkDomain = async (domain: string) => {
    try {
        const response = await DomainChcekAPI.get<DomainResponse>(
            `?domain=${domain}`
        );
        return response.data.status;
    } catch (error) {
        console.log(error);
    }
};
