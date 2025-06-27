import { MyTabs, PageLayout } from "@/components/layouts";
import { ComponentCard } from "@/components/ui";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { useCallEndpoint, useFetchSimultaneously, useGoToUrl } from "@/hooks";
import { ErrorBoundary, WorkerHeader } from "@/components";
import { ErrorComponent } from "@/modules/fallback/error/shared/components/ErrorComponent";
import { userProfileService } from "@/services";
import { _modules } from "@/types";
import { PersonWorkerContext } from "@/context/PersonWorkerContext";
import { SectionLayout } from "@/styled-components";
import { MarkingView } from "../modules/marking/pages/MarkingView";
import { SchedulesView } from "../modules/schedules/pages/SchedulesView";
import { LinkedDeviceView } from "../modules/linked-device/pages/LinkedDeviceView";

const WorkerFixedScheduleHistoryPage = () => {
  return (
    <PageLayout padding>
      <ComponentCard
        goBack={handleGoBack}
        minHeight={!loadedData ? "60vh" : "initial"}
        widthFull
        shiftedContent
      >
        <ErrorBoundary
          fallbackComponent={<ErrorComponent handleClick={fetchData} />}
          loadedData={loadedData}
          error={error}
        >
          <SectionLayout>
            <WorkerHeader
              name={worker?.fullname}
              position={worker.position}
              profile={profile}
            />
            <MyTabs
              fullWidth
              noPadding
              noBg
              orientation="horizontal"
              position="left"
              labels={["Horarios", "Marcación", "Acceso"]}
              tabPanels={[]}
              currentIndex={0}
            />
          </SectionLayout>
        </ErrorBoundary>
      </ComponentCard>
    </PageLayout>
  );
};

export default WorkerFixedScheduleHistoryPage;
