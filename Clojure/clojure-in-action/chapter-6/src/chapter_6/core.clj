(ns chapter-6.core
  (:gen-class))

(def all-users (ref {}))
all-users
(deref all-users)
@all-users

(dosync
 (ref-set all-users {}))

(defn make-user [id name salary]
  {:id id
   :name name
   :salary salary})

(defn add-new-user [name salary]
  (dosync
   (let [new-id (count @all-users)
         new-user (make-user new-id name salary)]
     (alter all-users assoc new-id new-user))))

(add-new-user "Dima" 30000)
(add-new-user "Dima2" 40000)
(add-new-user "Dima3" 50000)
(add-new-user "Dima4" 60000)



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 6"))
