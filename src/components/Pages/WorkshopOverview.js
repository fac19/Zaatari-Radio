import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title1, BGYellow } from '../../styles/componentsStyles';
import api from '../../api/api';

export default function WorkshopOverview({ match: { params } }) {
	const [errorState, setErrorState] = React.useState('');
	// const [workshops, setWorkshop] = React.useState({});

	//   console.log(params);
	useEffect(() => {
		api
			.getSpecificWorkshop(params.ID)
			.then((res) => {
				console.log(res);
				return res;
			})
			.catch((err) => {
				console.log(err);
				setErrorState(
					<h2>
						<br />
						<br />
						This workshop couldnt be found
					</h2>,
				);
				// Think we are setting state here with the err message
				return err;
			});
	}, []);

	return (
		<>
			<BGYellow>
				<Title1>Workshop Overview</Title1>
			</BGYellow>
			{errorState}
		</>
	);
}
// reclXZv3JtH77KpzW

/*
{
  "_table": {
    "_base": {
      "_airtable": {
        "requestTimeout": 300000
      },
      "_id": "appW2989WcgTxarh0"
    },
    "id": null,
    "name": "workshops"
  },
  "id": "reclXZv3JtH77KpzW",
  "_rawJson": {
    "id": "reclXZv3JtH77KpzW",
    "fields": {
      "overview": "This is the first workshop",
      "feedback": [
        "recvoGLUVrUrhDQ4o",
        "recADAnl5iZEOu9bI",
        "recs1ZIj05DBEQygA",
        "rec4WpNA0y1uuPiwR",
        "rec3mbzXTipEDkOtB",
        "recE3L3qCRrz8ouoK"
      ],
      "average_rating": 4,
      "workshop_id": 1,
      "carousel_pictures": [
        {
          "id": "attKUVrvE3xMZFr26",
          "url": "https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG",
          "filename": "WS1.PNG",
          "size": 384087,
          "type": "image/png",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/cdbdadfdff0fbfd536dbf4ddd5e103ce/b6b5106f",
              "width": 104,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/96e6d28bb0144ed217250288a80f14ac/0202797f",
              "width": 728,
              "height": 251
            },
            "full": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/c3adbad11e8cee3fdb2b1744f2c9bed2/babed8da",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ],
      "table_of_contents": "3",
      "content": "Header 1 \nOne long string\n<src=\"\" alt=\"I am a image\">\nParagraph text\nHeader 2\n",
      "title": "Workshop uno",
      "workshop_authors": [
        "recXaUoOZZ49jeMPX"
      ]
    },
    "createdTime": "2020-06-08T15:21:46.000Z"
  },
  "fields": {
    "overview": "This is the first workshop",
    "feedback": [
      "recvoGLUVrUrhDQ4o",
      "recADAnl5iZEOu9bI",
      "recs1ZIj05DBEQygA",
      "rec4WpNA0y1uuPiwR",
      "rec3mbzXTipEDkOtB",
      "recE3L3qCRrz8ouoK"
    ],
    "average_rating": 4,
    "workshop_id": 1,
    "carousel_pictures": [
      {
        "id": "attKUVrvE3xMZFr26",
        "url": "https://dl.airtable.com/.attachments/75768831999f01ca14c3f6930ce8bbb6/2be86799/WS1.PNG",
        "filename": "WS1.PNG",
        "size": 384087,
        "type": "image/png",
        "thumbnails": {
          "small": {
            "url": "https://dl.airtable.com/.attachmentThumbnails/cdbdadfdff0fbfd536dbf4ddd5e103ce/b6b5106f",
            "width": 104,
            "height": 36
          },
          "large": {
            "url": "https://dl.airtable.com/.attachmentThumbnails/96e6d28bb0144ed217250288a80f14ac/0202797f",
            "width": 728,
            "height": 251
          },
          "full": {
            "url": "https://dl.airtable.com/.attachmentThumbnails/c3adbad11e8cee3fdb2b1744f2c9bed2/babed8da",
            "width": 3000,
            "height": 3000
          }
        }
      }
    ],
    "table_of_contents": "3",
    "content": "Header 1 \nOne long string\n<src=\"\" alt=\"I am a image\">\nParagraph text\nHeader 2\n",
    "title": "Workshop uno",
    "workshop_authors": [
      "recXaUoOZZ49jeMPX"
    ]
  }
}

*/
WorkshopOverview.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			ID: PropTypes.string,
		}),
	}).isRequired,
};
