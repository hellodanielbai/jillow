@saves.each do |save|
    json.set! save.id do
        json.partial! '/api/saves/save', save: save
    end
end