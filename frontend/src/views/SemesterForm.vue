<template>
  <div class="main">
    <div class="courses">
      <h1 class="courses-header">Search For Courses</h1>
      <div class="search-form">
        <div class="filters collapsible">
          <h3 @click="toggleCollapse($event)" class="divider">
            Filters
            <i class="arrow down"></i>
          </h3>

          <div class="content">
            <form @submit.prevent="fetchCourses">
              <div class="form-group">
                <label class="form-label">Program Level</label>
                <select class="form-input" v-model="level" name="level">
                  <option value class selected="selected">--</option>
                  <option label="Undergraduate" value="UGRD">Undergraduate</option>
                  <option label="Graduate" value="GRAD">Graduate</option>
                  <option label="Law" value="LAW">Law</option>
                  <option label="Medical School" value="MED">Medical School</option>
                  <option label="Pharmacy" value="PHM">Pharmacy</option>
                  <option label="Physician Assistant" value="PA">Physician Assistant</option>
                  <option label="Professional" value="PROF">Professional</option>
                  <option label="Veterinary Medicine" value="VEM">Veterinary Medicine</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Department</label>
                <select class="form-input" v-model="department" name="department">
                  <option value class selected="selected">--</option>
                  <option
                    label="Accounting, Fisher School of"
                    value="17030000"
                  >Accounting, Fisher School of</option>
                  <option label="Advertising" value="23020000">Advertising</option>
                  <option label="African American Studies" value="16620000">African American Studies</option>
                  <option label="African Studies" value="16600000">African Studies</option>
                  <option
                    label="Agricultural &amp; Life Sciences-General"
                    value="60030000"
                  >Agricultural &amp; Life Sciences-General</option>
                  <option
                    label="Agricultural Education and Communication"
                    value="60260000"
                  >Agricultural Education and Communication</option>
                  <option
                    label="Agricultural Operations Management"
                    value="60079998"
                  >Agricultural Operations Management</option>
                  <option
                    label="Agricultural and Biological Engineering"
                    value="60070000"
                  >Agricultural and Biological Engineering</option>
                  <option label="Agronomy" value="60080000">Agronomy</option>
                  <option label="Animal Sciences" value="60090000">Animal Sciences</option>
                  <option label="Anthropology" value="16040000">Anthropology</option>
                  <option
                    label="Applied Physiology &amp; Kinesiology"
                    value="26030000"
                  >Applied Physiology &amp; Kinesiology</option>
                  <option label="Architecture, School of" value="15020000">Architecture, School of</option>
                  <option label="Art and Art History" value="13020000">Art and Art History</option>
                  <option label="Arts-General" value="13010000">Arts-General</option>
                  <option label="Astronomy" value="16060000">Astronomy</option>
                  <option
                    label="Behavioral Science &amp; Community Health"
                    value="33040000"
                  >Behavioral Science &amp; Community Health</option>
                  <option label="Biological Sciences" value="16900300">Biological Sciences</option>
                  <option label="Biomedical Engineering" value="19340000">Biomedical Engineering</option>
                  <option label="Biostatistics" value="36010000">Biostatistics</option>
                  <option label="Botany" value="16900500">Botany</option>
                  <option label="Business Admin-General" value="17010000">Business Admin-General</option>
                  <option label="Chemical Engineering" value="19030000">Chemical Engineering</option>
                  <option label="Chemistry" value="16120000">Chemistry</option>
                  <option
                    label="Civil and Coastal Engineering"
                    value="19040000"
                  >Civil and Coastal Engineering</option>
                  <option label="Classics" value="16140000">Classics</option>
                  <option label="Classics-Greek Studies" value="16140300">Classics-Greek Studies</option>
                  <option label="Classics-Latin" value="16140500">Classics-Latin</option>
                  <option
                    label="Clinical/Health Psychology"
                    value="33070000"
                  >Clinical/Health Psychology</option>
                  <option
                    label="College of Public Health &amp; Health Professions"
                    value="33000000"
                  >College of Public Health &amp; Health Professions</option>
                  <option
                    label="Comparative, Diagnostic &amp; Population Medicine"
                    value="28060000"
                  >Comparative, Diagnostic &amp; Population Medicine</option>
                  <option
                    label="Computer &amp; Information Science &amp; Engineering"
                    value="19140000"
                  >
                    Computer &amp; Information Science &amp;
                    Engineering
                  </option>
                  <option
                    label="Construction Management, Rinker School of"
                    value="15030000"
                  >Construction Management, Rinker School of</option>
                  <option label="Criminology" value="16920300">Criminology</option>
                  <option label="Dentistry-Endodontics" value="34110000">Dentistry-Endodontics</option>
                  <option label="Dentistry-General" value="34010000">Dentistry-General</option>
                  <option
                    label="Dentistry-Oral &amp; Maxillofacial Diagnostic Sci"
                    value="34160000"
                  >Dentistry-Oral &amp; Maxillofacial Diagnostic Sci</option>
                  <option label="Dentistry-Oral Biology" value="34030000">Dentistry-Oral Biology</option>
                  <option label="Dentistry-Orthodontics" value="34070000">Dentistry-Orthodontics</option>
                  <option label="Dentistry-Periodontics" value="34130000">Dentistry-Periodontics</option>
                  <option label="Dentistry-Prosthodontics" value="34140000">Dentistry-Prosthodontics</option>
                  <option
                    label="Design, Construction &amp; Planning-General"
                    value="15010000"
                  >Design, Construction &amp; Planning-General</option>
                  <option label="Digital Worlds Institute" value="13050000">Digital Worlds Institute</option>
                  <option label="Economics" value="17050000">Economics</option>
                  <option label="Economics" value="16030000">Economics</option>
                  <option
                    label="Education-Human Devel and Org Studies in Ed"
                    value="18070000"
                  >Education-Human Devel and Org Studies in Ed</option>
                  <option
                    label="Education-Spec Ed/Schl Psych/Early Child Stu"
                    value="18080000"
                  >Education-Spec Ed/Schl Psych/Early Child Stu</option>
                  <option
                    label="Education-Teaching and Learning"
                    value="18050000"
                  >Education-Teaching and Learning</option>
                  <option
                    label="Electrical and Computer Engineering"
                    value="19050000"
                  >Electrical and Computer Engineering</option>
                  <option label="Engineering-General" value="19400000">Engineering-General</option>
                  <option label="English" value="16200000">English</option>
                  <option
                    label="Entomology and Nematology"
                    value="60140000"
                  >Entomology and Nematology</option>
                  <option
                    label="Environmental Engineering Science"
                    value="19100000"
                  >Environmental Engineering Science</option>
                  <option
                    label="Environmental Horticulture"
                    value="60180000"
                  >Environmental Horticulture</option>
                  <option
                    label="Environmental and Global Health"
                    value="33160000"
                  >Environmental and Global Health</option>
                  <option label="Epidemiology" value="36020000">Epidemiology</option>
                  <option label="European Studies" value="16660000">European Studies</option>
                  <option
                    label="Family, Youth, and Community Sciences"
                    value="60320000"
                  >Family, Youth, and Community Sciences</option>
                  <option label="Finance" value="17060000">Finance</option>
                  <option label="First Year Florida" value="16010000">First Year Florida</option>
                  <option
                    label="Fisheries &amp; Aquatic Science - SFRC"
                    value="60469000"
                  >Fisheries &amp; Aquatic Science - SFRC</option>
                  <option label="Flexible Learning" value="52033000">Flexible Learning</option>
                  <option
                    label="Food Science and Human Nutrition"
                    value="60150000"
                  >Food Science and Human Nutrition</option>
                  <option
                    label="Food and Resource Economics"
                    value="60060000"
                  >Food and Resource Economics</option>
                  <option
                    label="Forest Resources and Conservation - SFRC"
                    value="60460000"
                  >Forest Resources and Conservation - SFRC</option>
                  <option label="Geography" value="16220000">Geography</option>
                  <option label="Geology" value="16240000">Geology</option>
                  <option label="Geomatics - SFRC" value="60466000">Geomatics - SFRC</option>
                  <option
                    label="Health Education and Behavior"
                    value="26050000"
                  >Health Education and Behavior</option>
                  <option
                    label="Health Services Administration"
                    value="33080000"
                  >Health Services Administration</option>
                  <option label="History" value="16280000">History</option>
                  <option label="Honors Office" value="02030000">Honors Office</option>
                  <option label="Horticultural Sciences" value="60230000">Horticultural Sciences</option>
                  <option
                    label="Industrial and Systems Engineering"
                    value="19060000"
                  >Industrial and Systems Engineering</option>
                  <option
                    label="Infectious Diseases &amp; Immunology"
                    value="28100800"
                  >Infectious Diseases &amp; Immunology</option>
                  <option
                    label="Info Systems and Operations Management"
                    value="17070000"
                  >Info Systems and Operations Management</option>
                  <option label="Innovation Academy" value="02070400">Innovation Academy</option>
                  <option
                    label="Interdisciplinary Studies"
                    value="16000000"
                  >Interdisciplinary Studies</option>
                  <option label="Interior Design" value="15050000">Interior Design</option>
                  <option label="Jewish Studies" value="16740000">Jewish Studies</option>
                  <option label="Journalism" value="23040000">Journalism</option>
                  <option label="Landscape Architecture" value="15040000">Landscape Architecture</option>
                  <option
                    label="Languages, Literatures &amp; Cultures"
                    value="16860000"
                  >Languages, Literatures &amp; Cultures</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Akan"
                    value="16860300"
                  >Languages, Literatures &amp; Cultures-Akan</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Amharic"
                    value="16860400"
                  >Languages, Literatures &amp; Cultures-Amharic</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Arabic"
                    value="16860500"
                  >Languages, Literatures &amp; Cultures-Arabic</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Chinese"
                    value="16860600"
                  >Languages, Literatures &amp; Cultures-Chinese</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Czech"
                    value="16860700"
                  >Languages, Literatures &amp; Cultures-Czech</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-French"
                    value="16860900"
                  >Languages, Literatures &amp; Cultures-French</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-German"
                    value="16861000"
                  >Languages, Literatures &amp; Cultures-German</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Haitian/Creo"
                    value="16861100"
                  >Languages, Literatures &amp; Cultures-Haitian/Creo</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Hebrew"
                    value="16861200"
                  >Languages, Literatures &amp; Cultures-Hebrew</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Italian"
                    value="16861400"
                  >Languages, Literatures &amp; Cultures-Italian</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Japanese"
                    value="16861500"
                  >Languages, Literatures &amp; Cultures-Japanese</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Korean"
                    value="16861600"
                  >Languages, Literatures &amp; Cultures-Korean</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Polish"
                    value="16861700"
                  >Languages, Literatures &amp; Cultures-Polish</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Russian"
                    value="16861800"
                  >Languages, Literatures &amp; Cultures-Russian</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Swahili"
                    value="16862000"
                  >Languages, Literatures &amp; Cultures-Swahili</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Vietnamese"
                    value="16862200"
                  >Languages, Literatures &amp; Cultures-Vietnamese</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Wolof"
                    value="16862300"
                  >Languages, Literatures &amp; Cultures-Wolof</option>
                  <option
                    label="Languages, Literatures &amp; Cultures-Yoruba"
                    value="16862500"
                  >Languages, Literatures &amp; Cultures-Yoruba</option>
                  <option
                    label="Large Animal Clinical Science"
                    value="28040000"
                  >Large Animal Clinical Science</option>
                  <option label="Latin American Studies" value="57140000">Latin American Studies</option>
                  <option label="Law" value="24010000">Law</option>
                  <option label="Law-Taxation" value="24050000">Law-Taxation</option>
                  <option label="Linguistics" value="16300000">Linguistics</option>
                  <option label="Management" value="17020000">Management</option>
                  <option label="Marketing" value="17080000">Marketing</option>
                  <option label="Mass Communication" value="23200000">Mass Communication</option>
                  <option
                    label="Materials Science and Engineering"
                    value="19090000"
                  >Materials Science and Engineering</option>
                  <option label="Mathematics" value="16320000">Mathematics</option>
                  <option
                    label="Mechanical/Aerospace Engineering"
                    value="19020000"
                  >Mechanical/Aerospace Engineering</option>
                  <option
                    label="Medicine-Aging/Geriatric Research"
                    value="29310000"
                  >Medicine-Aging/Geriatric Research</option>
                  <option label="Medicine-Anatomy" value="29260000">Medicine-Anatomy</option>
                  <option label="Medicine-Anesthesiology" value="29040000">Medicine-Anesthesiology</option>
                  <option
                    label="Medicine-Biochemistry/Molecular Biology"
                    value="29030000"
                  >Medicine-Biochemistry/Molecular Biology</option>
                  <option
                    label="Medicine-Community Health and Family Medicine"
                    value="29160000"
                  >Medicine-Community Health and Family Medicine</option>
                  <option
                    label="Medicine-Emergency Medicine"
                    value="29290200"
                  >Medicine-Emergency Medicine</option>
                  <option label="Medicine-General" value="29010000">Medicine-General</option>
                  <option
                    label="Medicine-Health Outcomes &amp; Biomedical Informat"
                    value="29240100"
                  >Medicine-Health Outcomes &amp; Biomedical Informat</option>
                  <option label="Medicine-Medicine" value="29050000">Medicine-Medicine</option>
                  <option
                    label="Medicine-Molecular Genetics &amp; Microbiology"
                    value="29060000"
                  >Medicine-Molecular Genetics &amp; Microbiology</option>
                  <option
                    label="Medicine-Neurological Surgery"
                    value="29190000"
                  >Medicine-Neurological Surgery</option>
                  <option label="Medicine-Neurology" value="29180000">Medicine-Neurology</option>
                  <option label="Medicine-Neuroscience" value="29020000">Medicine-Neuroscience</option>
                  <option
                    label="Medicine-Obstetrics &amp; Gynecology"
                    value="29070000"
                  >Medicine-Obstetrics &amp; Gynecology</option>
                  <option label="Medicine-Ophthalmology" value="29150000">Medicine-Ophthalmology</option>
                  <option
                    label="Medicine-Orthopaedics and Rehabilitation"
                    value="29170000"
                  >Medicine-Orthopaedics and Rehabilitation</option>
                  <option label="Medicine-Otolaryngology" value="29210000">Medicine-Otolaryngology</option>
                  <option label="Medicine-Pathology" value="29080000">Medicine-Pathology</option>
                  <option label="Medicine-Pediatrics" value="29090000">Medicine-Pediatrics</option>
                  <option
                    label="Medicine-Pharmacology &amp; Therapeutics"
                    value="29100000"
                  >Medicine-Pharmacology &amp; Therapeutics</option>
                  <option label="Medicine-Physiology" value="29110000">Medicine-Physiology</option>
                  <option label="Medicine-Psychiatry" value="29120000">Medicine-Psychiatry</option>
                  <option
                    label="Medicine-Radiation Oncology"
                    value="29200000"
                  >Medicine-Radiation Oncology</option>
                  <option label="Medicine-Radiology" value="29130000">Medicine-Radiology</option>
                  <option
                    label="Medicine-School of Physician Assistant Studies"
                    value="29710000"
                  >Medicine-School of Physician Assistant Studies</option>
                  <option label="Medicine-Surgery" value="29140000">Medicine-Surgery</option>
                  <option
                    label="Medieval &amp; Early Modern Studies"
                    value="16820000"
                  >Medieval &amp; Early Modern Studies</option>
                  <option
                    label="Microbiology and Cell Science"
                    value="60100000"
                  >Microbiology and Cell Science</option>
                  <option
                    label="Military Science-Air Force"
                    value="25020000"
                  >Military Science-Air Force</option>
                  <option label="Military Science-Army" value="25010000">Military Science-Army</option>
                  <option label="Military Science-Navy" value="25050000">Military Science-Navy</option>
                  <option label="Music" value="13030000">Music</option>
                  <option
                    label="Natural Resources and Environment, School of"
                    value="60170000"
                  >Natural Resources and Environment, School of</option>
                  <option
                    label="New World School of the Arts-Dance"
                    value="13100500"
                  >New World School of the Arts-Dance</option>
                  <option
                    label="New World School of the Arts-Music"
                    value="13100300"
                  >New World School of the Arts-Music</option>
                  <option
                    label="New World School of the Arts-Theatre"
                    value="13100400"
                  >New World School of the Arts-Theatre</option>
                  <option
                    label="New World School of the Arts-Visual Arts"
                    value="13100200"
                  >New World School of the Arts-Visual Arts</option>
                  <option
                    label="Nuclear and Radiological Engineering"
                    value="19080000"
                  >Nuclear and Radiological Engineering</option>
                  <option label="Nursing" value="31010000">Nursing</option>
                  <option label="Occupational Therapy" value="33030000">Occupational Therapy</option>
                  <option label="Packaging Sciences" value="60079999">Packaging Sciences</option>
                  <option label="Pathobiology" value="28100000">Pathobiology</option>
                  <option
                    label="Pharmacy-Medicinal Chemistry"
                    value="32030000"
                  >Pharmacy-Medicinal Chemistry</option>
                  <option label="Pharmacy-Pharmaceutics" value="32020000">Pharmacy-Pharmaceutics</option>
                  <option
                    label="Pharmacy-Pharmacodynamics"
                    value="32040000"
                  >Pharmacy-Pharmacodynamics</option>
                  <option
                    label="Pharmacy-Pharmacy Outcomes and Policy"
                    value="32050000"
                  >Pharmacy-Pharmacy Outcomes and Policy</option>
                  <option
                    label="Pharmacy-Pharmacy Practice"
                    value="32060000"
                  >Pharmacy-Pharmacy Practice</option>
                  <option label="Philosophy" value="16340000">Philosophy</option>
                  <option label="Physical Therapy" value="33050000">Physical Therapy</option>
                  <option label="Physics" value="16360000">Physics</option>
                  <option label="Physiological Science" value="28050000">Physiological Science</option>
                  <option label="Plant Pathology" value="60190000">Plant Pathology</option>
                  <option label="Political Science" value="16380000">Political Science</option>
                  <option label="Portuguese" value="16880500">Portuguese</option>
                  <option label="Psychology" value="16400000">Psychology</option>
                  <option
                    label="Public Health &amp; Health Professions - Undergrad"
                    value="33010000"
                  >Public Health &amp; Health Professions - Undergrad</option>
                  <option label="Public Relations" value="23060000">Public Relations</option>
                  <option
                    label="Rehabilitation Science Doctoral Program"
                    value="33120000"
                  >Rehabilitation Science Doctoral Program</option>
                  <option label="Religion" value="16420000">Religion</option>
                  <option
                    label="Small Animal Clinic Science"
                    value="28090000"
                  >Small Animal Clinic Science</option>
                  <option label="Sociology" value="16920500">Sociology</option>
                  <option label="Soil and Water Sciences" value="60210000">Soil and Water Sciences</option>
                  <option label="Spanish" value="16880300">Spanish</option>
                  <option
                    label="Speech, Language, and Hearing Sciences"
                    value="33060000"
                  >Speech, Language, and Hearing Sciences</option>
                  <option label="Sport Management" value="26040000">Sport Management</option>
                  <option label="Statistics" value="16480000">Statistics</option>
                  <option label="Telecommunication" value="23030000">Telecommunication</option>
                  <option label="Theatre and Dance" value="13040000">Theatre and Dance</option>
                  <option
                    label="Tourism Recreation and Sport Management"
                    value="26020000"
                  >Tourism Recreation and Sport Management</option>
                  <option
                    label="Tourism, Hospitality &amp; Event Management"
                    value="26090000"
                  >Tourism, Hospitality &amp; Event Management</option>
                  <option
                    label="Undergraduate Studies -SFCC"
                    value="02070000"
                  >Undergraduate Studies -SFCC</option>
                  <option
                    label="Urban and Regional Planning"
                    value="15060000"
                  >Urban and Regional Planning</option>
                  <option
                    label="Veterinary Medical Sciences"
                    value="28011100"
                  >Veterinary Medical Sciences</option>
                  <option
                    label="Veterinary Medicine Dean's Office"
                    value="28010000"
                  >Veterinary Medicine Dean's Office</option>
                  <option
                    label="Wildlife Ecology and Conservation"
                    value="60470000"
                  >Wildlife Ecology and Conservation</option>
                  <option label="Womens Studies" value="16800000">Womens Studies</option>
                  <option label="Writing Program" value="02060000">Writing Program</option>
                  <option
                    label="Written &amp; Oral Communication, Dial Center"
                    value="16580100"
                  >Written &amp; Oral Communication, Dial Center</option>
                  <option label="Zoology" value="16900700">Zoology</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Course Number</label>
                <input type="text" class="form-input" v-model="course_number" name="course_number" />
                <label class="form-label">Class #</label>
                <input type="text" class="form-input" v-model="class_number" name="class_number" />
              </div>
              <div class="form-group">
                <label class="form-label">Course Title</label>
                <input type="text" class="form-input" v-model="course_title" name="course_title" />
              </div>
              <div class="button-container">
                <button type="submit" class="search-button">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="results collapsible">
        <h3 @click="toggleCollapse($event)" class="divider">
          Results
          <i class="arrow down"></i>
        </h3>
        <div id="results" class="content">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-on:dragstart="handleDragStart($event, course, category)"
                @dragend="handleDragEnd($event)"
                id="drag1"
                draggable="true"
                v-for="course in availableCourses"
                :key="course.code"
              >
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits }}</td>
              </tr>
            </tbody>
          </table>
          <div class="empty" v-if="availableCourses.length == 0">
            <h3 class="no-results">No Courses Found</h3>
          </div>
        </div>
        <div class="placeholders collapsible"></div>
        <h3 @click="toggleCollapse($event)" class="divider">
          Placeholders
          <i class="arrow down"></i>
        </h3>
        <div class="content">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-on:dragstart="handleDragStart($event, course, category)"
                @dragend="handleDragEnd($event)"
                id="drag1"
                draggable="true"
                v-for="course in placeHolderCourses"
                :key="course.code"
              >
                <td>{{ course.code }}</td>
                <td>{{ course.name }}</td>
                <td>{{ course.credits }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="semester-builder">
      <h1 class="semester-header">Semester {{ semester.number }}</h1>
      <button class="save-button">Save</button>
      <div class="semester-term">
        <label class="term-label" for="term">Term:</label>
        <select id="term" class="semester-select">
          <option selected>{{ semester.term }}</option>
          <option>Fall 2020</option>
          <option>Spring 2021</option>
          <option>Summer 2021</option>
        </select>
      </div>
      <div class="semester-list">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Title</th>
              <th>Credits</th>
              <th>Audit Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in addedCourses" :key="course.code">
              <td>{{ course.code }}</td>
              <td>{{ course.name }}</td>
              <td>{{ course.credits }}</td>
              <td>
                <select>
                  <option>TEST</option>
                </select>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">
                <div
                  class="drag-header box"
                  @drop="handleDrop($event)"
                  @dragover.prevent
                  @dragenter.prevent
                  @dragEnter="handleDragEnter($event)"
                  @dragLeave="handleDragLeave($event)"
                  id="list"
                >Drag Courses Here to Add</div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="notes">
        <h4>Notes</h4>
        <textarea class="notes-input" v-model="semester.notes"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SemesterForm",
  data: function () {
    return {
      level: "",
      department: "",
      course_number: "",
      class_number: "",
      course_title: "",
      semester: {
        number: 1,
        term: "Spring 2021",
        notes: "Example Notes",
      },
      dragSrcEl: null,
      dragCat: null,
      availableCourses: [],
      placeHolderCourses: [
        {
          code: "PLACEHOLDER",
          name: "Elective",
          credits: 1,
        },
        {
          code: "PLACEHOLDER",
          name: "Elective",
          credits: 2,
        },
        {
          code: "PLACEHOLDER",
          name: "Elective",
          credits: 3,
        },
        {
          code: "PLACEHOLDER",
          name: "Elective",
          credits: 4,
        },
      ],
      addedCourses: [],
    };
  },
  computed: {
    courseList() {
      return this.courses;
    },
  },
  methods: {
    handleDragStart: function (event, course, category) {
      event.target.style.opacity = "0.4";
      this.dragSrcEl = course;
      console.log(category);
      this.dragCat = category;

      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/html", course.innerHTML);
    },
    handleDragOver: function (e) {
      if (e.preventDefault) {
        e.preventDefault();
      }

      return false;
    },
    handleDrop: function (e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }
      this.addedCourses.push(this.dragSrcEl);

      return false;
    },
    handleDragEnd: function (e) {
      e.target.style.opacity = "1";
      let items = document.querySelectorAll(".box");

      items.forEach(function (item) {
        item.classList.remove("over");
      });
    },
    handleDragEnter: function (e) {
      e.target.classList.add("over");
    },
    handleDragLeave: function (e) {
      e.target.classList.remove("over");
    },
    toggleCollapse: function (e) {
      e.target.classList.toggle("active");
      var content = e.target.nextElementSibling;
      if (content.style.maxHeight !== "0px") {
        content.style.maxHeight = 0 + "px";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
    fetchCourses: function () {
      document.getElementById("results").style.maxHeight = "100%";
      var data = {
        level: this.level,
        department: this.department,
        course_number: this.course_number,
        class_number: this.class_number,
        course_title: this.course_title,
      };
      fetch("http://localhost:8000/api/fetch/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token ".concat(this.$store.state.profile.token),
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => (this.availableCourses = res.parsed_courses));
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
thead {
  background-color: #285797;
  color: white;
}
tbody,
tfoot {
  background-color: white;
  font-weight: 800;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  padding: 3px;
  margin: 10px;
  float: right;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.no-results {
  margin: 10px;
}
ul,
li {
  list-style: none;
}
.button-container {
  width: 100%;
  text-align: center;
}
.search-button {
  width: 25%;
  height: 24px;
  background-color: #e0812e;
  margin: 10px;
  color: white;
  font-weight: 800;
}
.collapsible {
  cursor: pointer;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active,
.collapsible:hover {
  background-color: rgb(8, 0, 117);
}
.content {
  background-color: white;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.divider {
  height: 100%;
  background-color: #285797;
  border-top: 3px solid #e0812e;
  color: white;
  font-size: 1.5rem;
  text-align: left;
  padding: 10px;
}
.form-group {
  text-align: left;
  margin: 15px;
  width: 100%;
}
label {
  margin-right: 10px;
}
.form-label {
  font-size: 0.75rem;
  font-weight: 700;
  margin: 10px 0 10px 0;
  width: 100%;
  display: block;
}
.form-input {
  height: 24px;
  width: 50%;
}
.empty {
  font-size: 20px;
  margin: 20px 0 0 0;
}
.over {
  border: 3px dotted #666;
}
.save-button {
  width: 75px;
  height: 40px;
  background-color: #e0812e;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  transition: scale 0.3s ease-in-out;
}
.save-button:hover {
  transform: scale(1.1);
}

.drag-header {
  background-color: #285797;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  margin: auto;
  text-align: center;
}
.delete-btn {
  height: 25px;
  width: 25px;
  position: relative;
  left: 350px;
  bottom: 35px;
  border-radius: 12px;
  background-color: red;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;
}
.delete {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 6px;
  right: 6px;
}
.notes-input {
  resize: none;
  width: 99%;
  height: 100%;
}
.notes {
  position: absolute;
  top: 75%;
  left: 0;
  padding: 10px 0 0 10px;
  width: 99%;
  height: 150px;
  text-align: left;
  border-top: 1px solid black;
}
.semester-list {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 150px;
  left: 50px;
}

.term-label {
  font-size: 20px;
  font-weight: 600;
}
.semester-header {
  background-color: #285797;
  color: white;
  text-align: left;
  padding: 10px;
}

.semester-select {
  height: 30px;
  font-size: 20px;
  font-weight: 500;
}

.semester-term {
  position: relative;
  float: left;
  margin: 10px;
}
.semester-builder {
  height: 80vh;
  width: 65vw;
  border: 2px solid black;
  position: relative;
  float: right;
  margin: 100px 3vw 0 0;
}
.courses {
  height: 80vh;
  width: 25vw;
  border: 2px solid black;
  position: relative;
  overflow-y: scroll;
  float: left;
  margin: 100px 0 0 3vw;
}

.course-code,
.course-name,
.course-credits {
  display: inline-block;
  margin: 10px;
}
.course {
  background-color: #e0812e;
  color: white;
  font-weight: 600;
  width: 90%;
  margin: 5px auto 5px auto;
  border-radius: 50px;
  cursor: move;
}
.category-heading {
  text-align: left;
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
  text-decoration: underline;
}

.courses-header {
  background-color: #285797;
  color: white;
  font-size: 18px;
  font-weight: 500;
}
</style>
