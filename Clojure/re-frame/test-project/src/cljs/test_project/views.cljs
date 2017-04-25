(ns test-project.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com :refer-macros [handler-fn]]
              [re-com.buttons :as buttons]))

(defn title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Hello bb from " @name)
       :level :level1])))

(defn buttons-list[]
  [re-com/button :label "Click here!" :class "btn-danger" :style {:margin 20}])

(defn main-panel []
  (let [hover? (reagent.core/atom false)]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [[title][buttons-list][buttons-list][re-com/button
                                                      :label    [:span "Microsoft Modern Button " [:i.zmdi.zmdi-hc-fw-rc.zmdi-download]]
                                                      :on-click #()
                                                      :style    {:color            "white"
                                                                 :background-color (if @hover? "#0072bb" "#4d90fe")
                                                                 :font-size        "22px"
                                                                 :font-weight      "300"
                                                                 :border           "none"
                                                                 :border-radius    "0px"
                                                                 :padding          "20px 26px"
                                                                 :margin 20}
                                                      :attr     {:on-mouse-over (handler-fn (reset! hover? true))
                                                                 :on-mouse-out  (handler-fn (reset! hover? false))}]]])))
