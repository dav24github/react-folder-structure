import { Switch } from "@/shared/components/atoms/switch/Switch";
import { VerticalLayout } from "@/shared/components/organism/layouts/vertical-layout/VerticalLayout";

export const VacationTemplate = ({ tableFeature, calendarFeature }: any) => {
  return (
    <VerticalLayout>
      <Switch
        value={value}
        off={{ icon: "table", label: "Tabla" }}
        on={{ icon: "calendar", label: "Calendario" }}
        color="info"
      />
      {value ? tableFeature : calendarFeature}
    </VerticalLayout>
  );
};
