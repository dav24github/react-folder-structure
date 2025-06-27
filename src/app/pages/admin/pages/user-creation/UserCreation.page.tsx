const UserCreationPage = () => {
  return (
    <PageLayout title="Creación de usuarios">
      <MyTabs
        fixed
        indexHasSubTabs={[1]}
        orientation="vertical"
        labels={["Nuevo usuario", "Varios usuarios"]}
        tabPanels={[
          <SingleUserCretionSection />,
          <MassiveUsersCreationSection />,
        ]}
        currentIndex={0}
      />
    </PageLayout>
  );
};

export default UserCreation;
