const CustomScrollbar = () => (
  <style jsx global>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgb(218, 216, 216);
      border-radius: 3px;
      border: 1px solid rgb(206, 198, 198);
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgb(202, 190, 190);
    }
    
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgb(226, 215, 215) #f1f1f1;
    }
  `}</style>
);

export default CustomScrollbar;