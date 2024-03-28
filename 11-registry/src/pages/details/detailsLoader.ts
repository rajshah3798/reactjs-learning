import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";
import { getPackage } from "../../api/queries/getPackage";

export interface PackageDetailsResponse {
    details: PackageDetails;
}

interface LoaderArgs {
    params: Params
}

export async function detailsLoader({ params }: LoaderArgs): Promise<PackageDetailsResponse> {
    const { name } = params;

    if (!name) {
        throw new Error("Name must be provided")
    }

    const details = await getPackage(name);

    return {
        details
    }
}