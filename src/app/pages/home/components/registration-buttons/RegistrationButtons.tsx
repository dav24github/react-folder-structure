import { WrapperContainer } from "@/shared/components/organism/containers/wrapper-container/WrapperContainer";
import React from "react";

export const RegistrationButtons = () => {
  return (
    <WrapperContainer>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_GENERAL}?from=home`}
          filled={!!person.generalInfo.status}
        >
          Datos generales
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_EDUCATION}?from=home`}
          filled={person.education.status}
        >
          Formación
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_COURSES}?from=home`}
          filled={person.courses.status}
        >
          Cursos
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_EXPERIENCES}?from=home`}
          filled={person.experiences.status}
        >
          Experiencia laboral
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_EMERGENCY}?from=home`}
          filled={person.emergency.status}
        >
          Emergencias
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_RELATIVES}?from=home`}
          filled={person.relatives.status}
        >
          Familia
        </PersonalInfoButton>
        <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
      </Box>
      <Box>
        <PersonalInfoButton
          component={Link}
          to={`/${UrlRoutes.PERSONAL_INFO_HOBBIES}?from=home`}
          filled={person.hobbies.status}
        >
          Pasatiempos
        </PersonalInfoButton>
        {completedForms ? (
          <ArrowRightRounded className={classes.arrow}></ArrowRightRounded>
        ) : (
          <Box width={60}></Box>
        )}
      </Box>
      {completedForms && (
        <Box className={classes.btnDone}>
          <MyButton handleClick={handleClick}>Finalizar</MyButton>
        </Box>
      )}
    </WrapperContainer>
  );
};
