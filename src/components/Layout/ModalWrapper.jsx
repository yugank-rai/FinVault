export default function ModalWrapper({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modalBox}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        {children} 
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000 
  },
  modalBox: {
   background: 'rgba(15, 15, 15, 0.9)',
  backdropFilter: 'blur(25px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '40px',
  borderRadius: '24px',
  width: '450px',
  color: 'white',
  position: 'relative',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
  animation: 'modalFadeIn 0.3s ease-out' 
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#a0a0a0',
    fontSize: '18px',
    cursor: 'pointer'
  }
};