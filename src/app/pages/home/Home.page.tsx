import { HorizontalLayout } from "@/shared/components/organism/layouts/horizontal-layout/HorizontalLayout";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";
import { useState } from "react";
import { HomeBanner } from "./components/banner/HomeBanner";
import { HomeCompanyLogo } from "./components/company-logo/HomeCompanyLogo";
import { SectionContent } from "@/shared/components/organism/contents/section-content/SectionContent";
import { RegistrationButtons } from "./components/registration-buttons/RegistrationButtons";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";

const HomePage = () => {
  const { settings, getAndStoreOtherSetting } = useSettings();
  const { user } = useUser(); // resetCredencial askSetProfilePicture
  const { person, getAndStoreFormsStatus } = usePerson();
  const { loadedData, error, fetchData } = useFetchSimultaneously([
    getAndStoreOtherSetting,
    getAndStoreFormsStatus,
  ]);
  const [searchParams] = useSearchParams();
  const fromQuery = searchParams.get("from");
  const [isCompanyLogoModalShown, setIsCompanyLogoModalShown] = useState(false);

  const completedForms = Boolean(
    person.generalInfo.status &&
      person.education.status &&
      person.courses.status &&
      person.experiences.status &&
      person.emergency.status &&
      person.relatives.status &&
      person.hobbies.status
  );

  const visibleHomeSummary =
    !settings.otherSettings?.generalInfo ||
    (completedForms && fromQuery != "personal-info");

  return (
    <>
      {user.resetCredencial && <ResetPaswordModal />}
      {user.askSetProfilePicture && <ProfilePictureModal />}
      {isCompanyLogoModalShown && <CompanyLogoModal />}
      <ErrorBoundary
        fallbackComponent={<ErrorView handleClick={fetchData} />}
        loadedData={loadedData}
        error={error}
        isPage
      >
        <VerticalLayout>
          {/* HorizontalLayout or LeftRightLayout */}
          <HorizontalLayout>
            <HomeBanner />
            <HomeCompanyLogo />
          </HorizontalLayout>

          {visibleHomeSummary ? (
            <>
              <HorizontalLayout>
                <Button variant="elevated"></Button>
                <Button variant="elevated"></Button>
                <Button variant="elevated"></Button>
              </HorizontalLayout>

              <HorizontalLayout>
                <OutlinedCard>
                  <AvailableVacationCardBody />
                </OutlinedCard>
                <OutlinedCard title="Novedades del mes">
                  <MonthlyUpdateButton
                    title=""
                    description=""
                    icon="People"
                    onClick={() => {}}
                  />
                  <MonthlyUpdateButton
                    title=""
                    description=""
                    icon="BeachAccess"
                    onClick={() => {}}
                  />
                  <MonthlyUpdateButton
                    title=""
                    description=""
                    icon="Cake"
                    onClick={() => {}}
                  />
                </OutlinedCard>
              </HorizontalLayout>
            </>
          ) : (
            <SectionContent title="Completa los siguientes formularios:">
              <RegistrationButtons />
            </SectionContent>
          )}
        </VerticalLayout>
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
