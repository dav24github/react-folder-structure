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
      <ErrorBoundary
        fallbackComponent={<ErrorView handleClick={fetchData} />}
        loadedData={loadedData}
        error={error}
        isPage
      >
        <PageLayout paddingRB>
          <Grid container className={classes.container}>
            <Banner />

            {!visibleHomeSummary ? (
              <PersonalInfoButtons completedForms={completedForms} />
            ) : (
              <HomeSummary />
            )}
          </Grid>
        </PageLayout>
      </ErrorBoundary>
    </>
  );
};

export default Home;
