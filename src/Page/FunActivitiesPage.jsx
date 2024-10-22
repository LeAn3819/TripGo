import SortBar from "../common/SortBar";
import Sub from "../common/Sub";
import BannerFunActivities from "../components/FunActivities/BannerFunActivities";
import FilterSideBarFunActivities from "../components/FunActivities/FilterSideBarFunActivities";
import FunActivitiesList from "../components/FunActivities/FunActivitiesList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
const FunActivitiesPage = () => {
  return (
    <div>
      <Header />
      <BannerFunActivities />
      {/* Main content: Filter Sidebar and Hotel Listings */}
      <div className="flex w-4/5 mx-auto mt-[65px]">
        {/* Sidebar for filters */}
        <FilterSideBarFunActivities />

        {/* Main content area: Sorting options and hotel cards */}
        <div className="flex-1   ml-6">
          <SortBar />

          {/* RestautantList */}
          <div className="mt-[100px]">
            <FunActivitiesList />
          </div>
        </div>
      </div>
      <Sub />
      <Footer />
    </div>
  );
};

export default FunActivitiesPage;
