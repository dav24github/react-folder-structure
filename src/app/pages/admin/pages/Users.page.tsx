const UsersPage = () => {
  return (
    <>
      {modalEditUser.show && (
        <EditUserModal
          payload={modalEditUser.payload}
          onClose={() => setModalEditUser({ show: false, payload: null })}
          onUpdate={updatedUser}
        />
      )}
      {modalSendCredentials.show && (
        <SendCredentialsModal
          payload={modalSendCredentials.payload}
          onClose={() =>
            setModalSendCredentials({ show: false, payload: null })
          }
        />
      )}
      {modalStateUser.show && (
        <StateUserModal
          payload={modalStateUser.payload}
          onClose={() => setModalStateUser({ show: false, payload: null })}
          onUpdate={updatedState}
        />
      )}
      <PageLayout paddingRB title="Lista de usuarios">
        <MyDataGrid
          title="Lista_usuarios"
          keepOriginalData
          rows={rows}
          columns={columns}
          error={error}
          fetchData={fetchData}
          onSearchChange={onSearchChange}
          pagination={{
            server: {
              pageInfo: {
                pageSize: pageLimit,
                totalRowCount: data ? data.total : 0,
              },
              handlePaginationModelChange: handlePaginationModelChange,
            },
          }}
          filter={{
            component: (
              <FilterDataGrid>
                <StatusFilter
                  filters={filters}
                  setFilters={setFilters}
                  message="Usuarios"
                />
              </FilterDataGrid>
            ),
            activeFilters: activeFilters,
          }}
          actions={
            <Box width={240}>
              <FeatureCard
                int
                color="success"
                label="Usuarios de alta"
                value={activeUsersTotal}
              />
            </Box>
          }
        />
      </PageLayout>
    </>
  );
};

export default UsersPage;
