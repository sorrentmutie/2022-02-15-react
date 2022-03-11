import { useFeatures } from "../../hooks/useFeatures";
import { BuildingList } from "./components/BuildingList";

export const FeaturesPage = () => {
    const { buildings} = useFeatures();
    return (
        <div>
            <BuildingList buildings={buildings} />
        </div>
    );
}