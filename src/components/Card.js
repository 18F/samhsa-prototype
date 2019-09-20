import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';

import { linkToFacility, removeHttp } from '../utils/misc';

import MapStatic from './Map/MapStatic';

const StyledList = styled.ul`
  li:not(:last-child):not(:first-child):after {
    content: ', ';
  }
`;

const renderService = (services, frid, latitude, longitude, name1) => {
  if (!services) {
    return;
  }

  const servicesArray = services.values;

  return (
    <div css={tw`flex text-sm mb-1`}>
      <FontAwesomeIcon
        icon={faCheck}
        css={tw`text-green mt-1 fill-current w-4 h-4 mr-2 flex-none`}
      />
      <StyledList>
        <li css={tw`font-bold inline`}>{services.name}: </li>
        {servicesArray.slice(0, 3).map((value, index) => (
          <li key={index} css={tw`inline`}>
            <span>{value}</span>
          </li>
        ))}
        {servicesArray.length > 3 && (
          <li css={tw`inline`}>
            <Link
              css={tw`font-bold`}
              to={linkToFacility({ frid, latitude, longitude })}
              aria-label={`All ${services.name} for ${name1}`}
            >
              plus more
            </Link>
          </li>
        )}
      </StyledList>
    </div>
  );
};

const Card = props => {
  const {
    city,
    frid,
    latitude,
    longitude,
    miles,
    name1,
    name2,
    phone,
    services,
    state,
    street1,
    street2,
    website,
    zip
  } = props;

  return (
    <li css={tw`bg-white shadow border-t border-gray-lighter rounded mb-10`}>
      <div css={tw`px-6 py-4 bg-blue-light text-white rounded-t`}>
        <Link
          to={linkToFacility({ frid, latitude, longitude })}
          css={tw`flex justify-between items-center -mx-2 text-white `}
        >
          <h2 css={tw`font-heading font-bold text-xl px-2`}>
            {name1}
            {name2 && (
              <>
                {' '}
                <span className="card-name2">{name2}</span>
              </>
            )}
          </h2>
          <span css={tw`flex-none px-2`}>more info ›</span>
        </Link>
      </div>
      <div css={tw`flex flex-wrap -mb-4 -mx-2 p-6`}>
        <div css={tw`w-1/4 px-2`}>
          <MapStatic
            name1={name1}
            street1={street1}
            street2={street2}
            city={city}
            state={state}
            zip={zip}
            latitude={latitude}
            longitude={longitude}
            miles={miles}
          />
        </div>
        <div css={tw`w-3/4 px-2`}>
          {phone && (
            <div css={tw`flex items-center`}>
              <FontAwesomeIcon
                icon={faPhone}
                css={tw`text-gray fill-current w-4 h-4 mr-2`}
              />
              <OutboundLink
                eventLabel="Facility phone link from card"
                to={`tel:${phone}`}
                css={tw`block text-gray-darkest text-lg`}
              >
                {phone}
              </OutboundLink>
            </div>
          )}
          {website !== 'http://' && (
            <div className="card-website" css={tw`truncate`}>
              <OutboundLink
                eventLabel="Facility website link from card"
                to={website}
                target="_blank"
                rel="noopener noreferrer"
                css={tw`ml-6`}
              >
                {removeHttp(website).toLowerCase()}
              </OutboundLink>
            </div>
          )}
          <address css={tw`not-italic mb-2 ml-6`}>
            {street1}
            {street2 && `, ${street2}`}, {city}, {state} {zip}
          </address>
          <div css={tw`text-sm`}>
            {renderService(
              {
                name: 'Services',
                values: [
                  ...((services.TC || {}).values || []),
                  ...((services.SET || {}).values || [])
                ]
              },
              frid,
              latitude,
              longitude,
              name1
            )}
            {renderService(services.PAY, frid, latitude, longitude, name1)}
          </div>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  city: PropTypes.string.isRequired,
  frid: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  miles: PropTypes.number,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  phone: PropTypes.string,
  services: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  website: PropTypes.string,
  zip: PropTypes.string.isRequired
};

export default Card;
