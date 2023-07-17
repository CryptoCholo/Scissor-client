import PropTypes from 'prop-types';


function QRCodeImage({ imageUrl }) {
    
  return (
    <div>
      <img src={imageUrl} alt="QR Code" />
    </div>
  );
}


QRCodeImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};
  

export default QRCodeImage;
