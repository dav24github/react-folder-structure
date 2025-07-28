import { CardBody } from "@/shared/components/organism/cards/common/CardBody";
import { CardTitle } from "@/shared/components/organism/cards/common/CardTitle";
import { OutlinedCard } from "@/shared/components/organism/cards/outlined-card/OutlinedCard";
import { Slider } from "@/shared/components/molecules/slider/Slider";
import { RowContainer } from "@/shared/components/organism/containers/row-container/RowContainer";
import { Chip } from "@/shared/components/atoms/chip/Chip";
import { WrapperContainer } from "@/shared/components/organism/containers/wrapper-container/WrapperContainer";
import { Box } from "@mui/material";
import { Typography } from "@/shared/components/atoms/typography/Typography";
import { useScheduleUIInfo } from "@/shared/hooks/useScheduleUIInfo";
import { AttendanceShift } from "@/shared/components/molecules/_attendance/AttendanceShift";

export const MyWeeklyScheduleSection = () => {
  const { scheduleUIInfo } = useScheduleUIInfo(currentAttendanceWeek);

  return (
    <OutlinedCard>
      <CardTitle
        icon="sun"
        toolbar={<Slider slides={foo} currentIndex={index} />}
      >
        Semana
      </CardTitle>
      <CardBody>
        <RowContainer>
          {scheduleUIInfo.rowNumber.map((_, key) => (
            <Box>
              <Chip color="shift-color">T1</Chip>
              <Chip color="shift-color">T2</Chip>
              {scheduleUIInfo.hasT3 && <Chip color="shift-color">T3</Chip>}
            </Box>
          ))}

          <WrapperContainer>
            {currentAttendanceWeek.map((obj) => (
              <Box>
                <Box>
                  <Typography variant="subtitle2">{obj.day}</Typography>
                  <Typography>{obj.date}</Typography>
                </Box>
                <Box>
                  <AttendanceShift rounded data={obj.shift1} />
                  <AttendanceShift rounded data={obj.shift2} />
                  {scheduleUIInfo.hasT3 && (
                    <AttendanceShift rounded data={obj.shift3} />
                  )}
                </Box>
              </Box>
            ))}
          </WrapperContainer>
        </RowContainer>
      </CardBody>
    </OutlinedCard>
  );
};
