import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Stack, Typography } from '@mui/material';

interface TimelineData {
    title: string;
    date: string;
    description: string[];
    techUsed: string[];
}

interface AlternateTimelineProps {
    timelineData: TimelineData[] ;
}
export default function AlternateTimeline({ timelineData }: AlternateTimelineProps) {
    return (
        <Timeline position="alternate">
            {timelineData.map((item, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < timelineData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            {item.title}
                        </Typography>
                        <Typography>{item.date}</Typography>
                        {item.techUsed && <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
                            <Typography variant="subtitle2" component="span">Technologies Used:</Typography>
                            {item.techUsed.map((tech, i) => (
                                <Typography key={i} variant="body2" component="span">
                                    {tech}{i < item.techUsed.length - 1 ? ',' : ''}
                                </Typography>
                            ))}
                        </Stack>}
                        {item.description.map((desc, i) => (
                            <Typography key={i} variant="body2">
                                {`- ${desc}`}
                            </Typography>
                        ))}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

// export default function AlternateTimeline( {timelineData } :any ) {
//     return (
//         <Timeline position="alternate">
//             {timelineData.map((item, index) => (
//                 <TimelineItem key={index}>
//                     <TimelineSeparator>
//                         <TimelineDot />
//                         {index < timelineData.length - 1 && <TimelineConnector />}
//                     </TimelineSeparator>
//                     <TimelineContent>
//                         <Typography variant="h6" component="span">
//                             {item.title}
//                         </Typography>
//                         <Typography>{item.date}</Typography>
//                         {item.description.map((desc, i) => (
//                             <Typography key={i} variant="body2">
//                                 {`- ${desc}`}
//                             </Typography>
//                         ))}
//                     </TimelineContent>
//                 </TimelineItem>
//             ))}
//         </Timeline>
//     );
// }
// export default function AlternateTimeline() {
//     return (
//         <Timeline position="alternate">
//             {timelineData.map((item, index) => (
//                 <TimelineItem key={index}>
//                     <TimelineSeparator>
//                         <TimelineDot />
//                         {index < timelineData.length - 1 && <TimelineConnector />}
//                     </TimelineSeparator>
//                     <TimelineContent>
//                         <Typography variant="h6" component="span">
//                             {item.title}
//                         </Typography>
//                         <Typography>{item.date}</Typography>
//                         <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
//                             <Typography align='center' variant="subtitle2" component="span">Technologies Used:</Typography>
//                             {item.techUsed.map((tech, i) => (
//                                 <Typography key={i} variant="body2" component="span">
//                                     {tech}{i < item.techUsed.length - 1 ? ',' : ''}
//                                 </Typography>
//                             ))}
//                         </Stack>
//                         {item.description.map((desc, i) => (
//                             <Typography key={i} variant="body2">
//                                 {`- ${desc}`}
//                             </Typography>
//                         ))}
//                     </TimelineContent>
//                 </TimelineItem>
//             ))}
//         </Timeline>
//     );
// }