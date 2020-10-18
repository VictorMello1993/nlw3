function saveOrphanage(db, orphanage) {
  return db.run(`
    INSERT INTO orphanages (
        lat, 
        lng,
        name,
        about,
        instructions,
        images,
        opening_hours,
        open_on_weekends,
        whatsapp
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.instructions}",
        "${orphanage.images}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}",
        "${orphanage.whatsapp}"      
    );
`);
}

module.exports = saveOrphanage;
