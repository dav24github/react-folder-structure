const HomePage = () => {
  const dispatch = useDispatch();
  const { callEndpoint } = useCallEndpoint();
  const { settings, getAndStoreOtherSetting } = useSettings();
  const { user } = useUser();
  const { person, storeFormsStatus } = usePerson();
  const { loadedData, error, fetchData } = useFetchSimultaneously([
    getAndStoreOtherSetting,
    storeFormsStatus,
  ]);
  const [searchParams] = useSearchParams();
  const fromQuery = searchParams.get("from");
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  useEffect(() => {
    if (user.resetCredencial) setShowPasswordModal(true);
  }, [user.resetCredencial]);

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
      {showPasswordModal && (
        <Modal center title="Cambio de contraseña" size="sm">
          <NewPassword />
        </Modal>
      )}
      {showProfileModal && (
        <UploadImageModal
          size="sm"
          src={null} // No profile
          rounded
          onLater={() => setShowProfileModal(false)}
        />
      )}
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
