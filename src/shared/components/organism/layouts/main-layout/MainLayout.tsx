export const MainLayout = ({ children }: ChildrenProps) => {
  // STYLES
  const mainStyle = clsx(styles.main, !expandedMenu && styles.mainExpanded);
  // ------------------------------

  return (
    <Box className={styles.root}>
      <MainToolbar />
      <MainSideBar />
      <main className={mainStyle}>
        <Box id="container" className={styles.container}>
          <Box className={styles["toolbar-spacing"]} />
          <Box className={styles.content}>{children}</Box>
        </Box>
      </main>
    </Box>
  );
};
